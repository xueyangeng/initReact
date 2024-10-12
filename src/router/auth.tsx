import { FC } from "react";

const AuthEelement: FC<{
    element: React.ReactNode
}> = ({ element }) => {
    console.log('AuthEelement');
    return <>{element}</>;
}

export default AuthEelement;