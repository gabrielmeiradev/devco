import ITheme from "../_interfaces/theme";

export default function getThemeById(id: string): ITheme {
    // TODO: make this service get theme by id at the server
    console.log(id);

    const theme: ITheme = {
        backgroundImage: "/images/background/temp-bg.png",
        primaryColor: "#CB4381"
    };
    return theme;
}