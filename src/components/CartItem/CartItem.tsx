import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import GenericCard from "../GenericCard/GenericCard";
import AddIcon from "@mui/icons-material/AddCircle";
import SubtractIcon from "@mui/icons-material/RemoveCircle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAsCurrency } from "@/utils/getAsCurrency";

interface CartItemProps {
    productName: string
    productId: string
    unitPrice: number
    limit: number
    lowerLimit: number
    productImage: string
    quantity: number
    onQuantityChanged?: (_: number) => void
    removable?: boolean
}

function CartItem({
    onQuantityChanged = () => undefined,
    removable = true,
    ...props}: CartItemProps) {

    function incrementQuantity() {
        if ((props.quantity + 1) < props.limit+1) {
            onQuantityChanged(props.quantity + 1);
        }
    }

    function decrementQuantity() {
        if ((props.quantity - 1) >= 0 && (props.quantity - 1) >= props.lowerLimit) {
            onQuantityChanged(props.quantity - 1);
        }
    }

    function isIncrementEnabled(): boolean {
        return !((props.quantity + 1) >= props.limit+1);
    }

    function isDecrementEnabled(): boolean {
        return !((props.quantity - 1) < 0 && (props.quantity - 1) < props.lowerLimit);
    }

    function willBeRemoved(): boolean {
        return props.quantity == props.lowerLimit + 1;
    }

    return (
        <Box width={"100%"} borderRadius={"10px"} overflow={"hidden"}>
            <GenericCard>
                <Box width={"100%"} display={"flex"} gap={"10px"} >
                    <Box
                        width={"39%"}
                        style={{ backgroundPosition: "center", backgroundImage: `url(${props.productImage})`}} />

                    <Box width={"100%"} paddingX={"9px"}
                        paddingY={"18px"}>
                        <Typography
                            variant="body1"
                            color={"#FFFFFF"}
                            marginBottom={"30px"}>
                            {props.productName}
                        </Typography>

                        <Divider />

                        <Box
                            width={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            gap={"10px"}
                            marginTop={"18px"} >
                            <Box>
                                <Typography
                                    variant="caption"
                                    color={"#FFFFFF"}>R$</Typography>
                                <Typography
                                    variant="body1"
                                    color={"#FFFFFF"}>
                                    {getAsCurrency(props.unitPrice * props.quantity)}
                                </Typography>
                            </Box>

                            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                <IconButton color="primary" onClick={decrementQuantity} disabled={!isDecrementEnabled()}>
                                    {removable && willBeRemoved() ? <DeleteForeverIcon /> : <SubtractIcon />}
                                </IconButton>
                                <Typography
                                    variant="body1"
                                    color={"#FFFFFF"}>
                                    {props.quantity}
                                </Typography>
                                <IconButton color="primary" onClick={incrementQuantity} disabled={!isIncrementEnabled()}>
                                    <AddIcon />
                                </IconButton>
                            </Box>

                        </Box>
                    </Box>
                </Box>




            </GenericCard>
        </Box>
    );
}

export default CartItem;
