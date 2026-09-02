import { localContentProviderStatus, localContentRepository } from "./local-repository";

export const contentRepository = localContentRepository;
export const contentProviderStatus = localContentProviderStatus;

export type { ContentProviderStatus, ContentRepository } from "./repository";
