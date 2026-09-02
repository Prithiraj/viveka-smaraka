import type {
  EventRecord,
  Facility,
  HeritageMoment,
  Programme,
  SearchRecord,
  VisitorContact,
  VisitorFact,
} from "@/types/content";

export interface ContentRepository {
  getProgrammes(): Promise<readonly Programme[]>;
  getProgrammeBySlug(slug: string): Promise<Programme | undefined>;
  getFacilities(): Promise<readonly Facility[]>;
  getHeritageMoments(): Promise<readonly HeritageMoment[]>;
  getHeritagePreviewMoments(): Promise<readonly HeritageMoment[]>;
  getEvents(): Promise<readonly EventRecord[]>;
  getEventBySlug(slug: string): Promise<EventRecord | undefined>;
  getVisitorFacts(): Promise<readonly VisitorFact[]>;
  getVisitorContact(): Promise<VisitorContact>;
  getSearchRecords(): Promise<readonly SearchRecord[]>;
}

export interface ContentProviderStatus {
  id: "local";
  label: string;
  external: boolean;
}
