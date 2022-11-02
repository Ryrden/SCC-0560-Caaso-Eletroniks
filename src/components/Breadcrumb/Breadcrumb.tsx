import { Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import GenericCard from "../GenericCard/GenericCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

interface INavigator {
    to: string
    label: string
    current: boolean
}

export interface BreadcrumbPropsType {
    navigators: INavigator[]
}

function Breadcrumb(props: BreadcrumbPropsType) {

    const navigate = useNavigate();

    return <Box>
        <GenericCard>
            <Box padding={"10px"}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" style={{color: "#FFFFFF"}} />}
                    aria-label="breadcrumb"
                >
                    {props.navigators.map((navigator, index) => {
                        return <Link 
                            key={index} 
                            underline="hover" 
                            color="#FFFFFF" 
                            fontWeight={navigator.current ? "600": "400"} 
                            style={{cursor: "pointer"}} 
                            onClick={() => {navigate(navigator.to);}}>
                            {navigator.label}
                        </Link>;
                    })}
                </Breadcrumbs>
            </Box>
        </GenericCard>

    </Box>;
}

export default Breadcrumb;