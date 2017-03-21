
export class GuildMember {
  name: string;
  level: number;
  ascensionLevel: number;
  title: string;
  profession: string;
  rank: 1 | 3 | 5;
  unacceptedInvite: boolean;
  lastSeen: number;
  joinedAt: number;
}

export class Guild {
  name: string;
  tag: string;
  leader: string;
  founded: number;
  level: number;
  gold: number;

  maxMembers: number;
  members: GuildMember[];

  motd: string;
  taxRate: number;

  $me?: GuildMember;
}