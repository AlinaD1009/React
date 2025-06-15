import { Outlet } from "react-router-dom"; 


export function AuthLayoutComponent () {
    return (
        <div 
            style={{
                width: '100vw', 
                height: '100vh',
                padding: '20px',
                background: 'linear-gradient(286.39deg, #2460fa 6.29%, #24adfa 94.08%)'

            }}
        >
            <Outlet/>
        </div>
    )
}
