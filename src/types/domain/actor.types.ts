export type ActorType = "admin";

export type AuthSession = {
  actorType: ActorType;
  accessToken: string;
  refreshToken: string;
  expiresAt: number | null;
};
