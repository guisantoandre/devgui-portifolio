import React from "react";

type EmojiProps = React.ComponentProps<"span">;

export function Emoji({ children, ...props }: EmojiProps) {
   return <span {...props}>{children}</span>;
}
