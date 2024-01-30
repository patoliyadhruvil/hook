import { useContext } from "react";
import { userContext } from "../MainCom/MainCom";


const ChildC = () => {
    const user = useContext(userContext);
    console.log("User", user);

    return (
        <>
            <h2>I'm Child C com</h2>
            <p>Hello, {user.name}</p>
        </>
    );
};

export default ChildC;
