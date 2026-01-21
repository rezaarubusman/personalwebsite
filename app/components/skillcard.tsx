import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Skill } from "types/skills";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden bg-black">
        <img
          src={skill.image}
          alt={skill.title}
          className="w-full h-full object-contain p-6"
        />
      </div>

      <CardContent className="p-4">
        <Badge className="mb-2">{skill.category}</Badge>
        <h3 className="font-semibold text-lg mb-2">
          {skill.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;