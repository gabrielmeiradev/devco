export default function Bio({ bio }: { bio: string }) {

    return (
        <div className="p-8 bg-secondary/30 backdrop-blur-sm rounded-lg">
            <h1 className="text-base font-semibold text-muted-foreground mb-4">Bio</h1>
            <p className="font-normal text-base">{bio}</p>
        </div>
    );
}
