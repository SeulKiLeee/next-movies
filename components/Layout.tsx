import NavBar from "./NavBar";

interface Props {
    children: React.ReactElement[];
}

export default function Layout({children}: Props){
    return <>
        <NavBar />
        <div>
            {children}
        </div>
    </>
};