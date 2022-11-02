import { useState } from "react";

export enum STATUS {
    IDLE,
    PENDING,
    FAILURE,
    SUCCEEDED
}

type SegmentStateType<T> = {
    data: T | null | undefined
    error: string | null | undefined
    clear: () => void
    setStatus: (_: STATUS) => void
    setData: (data: T) => void
    setError: (_: string) => void
    hasError: boolean
    hasSucceeded: boolean
    isPending: boolean
    isIdle: boolean
}

interface InitialState<T> {
    status?: STATUS
    error?: string | null
    data?: T | null
}

export function useSegmentState<T = unknown>(
    initialState: InitialState<T> = {
        status: STATUS.IDLE,
        error: null,
        data: null
    }
): SegmentStateType<T> {
    const [status, _setStatus] = useState<STATUS | undefined>(initialState.status);
    const [error, _setError] = useState<string | null | undefined>(initialState.error);
    const [data, _setData] = useState<T | null | undefined>(initialState.data);

    function setError(errorMessage: string): void {
        _setError(errorMessage);
        _setStatus(STATUS.FAILURE);
    }

    function setStatus(newStatus: STATUS): void {
        _setStatus(newStatus);
    }

    function setData(newData: T): void {
        _setData(newData);
    }

    const hasError: boolean = status === STATUS.FAILURE;
    const hasSucceeded: boolean = status === STATUS.SUCCEEDED;
    const isPending: boolean = status === STATUS.PENDING;
    const isIdle: boolean = status === STATUS.IDLE;

    function clear(): void {
        _setError(null);
        setStatus(STATUS.IDLE);
    }

    return {
        data,
        error,
        setStatus,
        setData,
        setError,
        clear,
        hasError,
        hasSucceeded,
        isPending,
        isIdle
    };
}
