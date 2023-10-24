import { Badge } from "@/components/ui/Badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon
} from "lucide-react";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const categoryIcon = {
    Mouses: <MouseIcon size={16} />,
    Teclados: <KeyboardIcon size={16} />,
    Fones: <HeadphonesIcon size={16} />,
    Mousepads: <SquareIcon size={16} />,
    Monitores: <MonitorIcon size={16} />,
    Speakers: <SpeakerIcon size={16} />
  };
  return (
    <Badge
      variant="outline"
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.name as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
