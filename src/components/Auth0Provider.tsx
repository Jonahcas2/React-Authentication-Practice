import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
    children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
    children,
}) => {
    const navigate = useNavigate();
    const domain = "dev-0sdyvelpn2w4yv6c.us.auth0.com";
    const clientID = "YsarTfitjpqdTg7cEO4cTFiQ1DQNt8ta";
    const redirectURI = "http://localhost:5173/callback";

    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if (!(domain && clientID && redirectURI)) {
        return null;
    }

    return (
        <Auth0Provider domain={domain}
        clientId={clientID}
        authorizationParams={{
            redirect_uri: redirectURI,
            scope: "openid profile email",
        }}
        onRedirectCallback={onRedirectCallback}
        cacheLocation="localstorage">(children)</Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
