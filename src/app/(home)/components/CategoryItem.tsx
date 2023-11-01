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
import Link from "next/link";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const categoryIcon = {
    mouses: <MouseIcon size={16} />,
    keyboards: <KeyboardIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    speakers: <SpeakerIcon size={16} />
  };
  return (
    <Link href={`/product/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
