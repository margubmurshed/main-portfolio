import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Skill = ({ icon: Icon, name, className }: { icon: any; name: string, className?: string }) => (
    <div className={cn("text-center flex flex-col items-center bg-secondary/5 gap-3 text-background hover:bg-background hover:text-foreground transition p-5 rounded-2xl group", className)}>
        {/* Pass className directly to icon */}
        <Icon className="group-hover:scale-110 transition" size={60} />
        <p className="text-xs text-center">{name}</p>
    </div>
);


export default Skill;