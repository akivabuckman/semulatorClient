import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";


const Homepage = () => {
    return(
        <div>
            <h1>Homepage</h1>
            <Stack spacing={2} direction={"row"}>
                <Button component={Link} to="/exercise" >Go to exercise</Button>
                <Button component={Link} to="/login" >Log In</Button>
                <Button component={Link} to="/register" >Register</Button>
            </Stack>
        </div>
    )
}

export default Homepage