CREATE TABLE `todo` (
	`id` integer PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	`isComplete` integer DEFAULT 0,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `todo_id_unique` ON `todo` (`id`);