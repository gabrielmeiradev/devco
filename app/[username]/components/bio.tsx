import { useUser } from "../../providers/user";

export default function Bio() {
    const user = useUser();

    return (
        <div className="p-8 bg-secondary/30 backdrop-blur-sm rounded-lg">
            <h1 className="text-base font-semibold text-muted-foreground mb-4">Bio</h1>
            <p className="font-medium text-base">{user.bio}</p>
        </div>
    );
}
