import { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  user: User | null;
  className?: string;
};

const UserAvatar = ({ user, className = "w-6 h-6" }: Props) => {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={user?.image || undefined}
        alt={`@${user?.name}-avatar`}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
