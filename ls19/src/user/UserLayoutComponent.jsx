import { Outlet } from "react-router-dom"; 


export function UserLayoutComponent () {
    return (
        <div 
            style={{
                width: '100vw', 
                height: '100vh',
                padding: '20px',
                background: 'linear-gradient(286.39deg, #0DB46E 6.29%, #23D58A 94.08%)'

            }}
        >
            <Outlet/>
        </div>
    )
}