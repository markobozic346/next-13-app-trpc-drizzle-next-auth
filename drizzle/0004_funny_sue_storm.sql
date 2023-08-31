CREATE TABLE `todo` (
	`id` text PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	`isComplete` integer DEFAULT 0 NOT NULL,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
