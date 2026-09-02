import { events } from "@/content/events";
import { searchRecords } from "@/content/search";
import { facilities, heritageMoments, heritagePreviewMoments, programmes } from "@/content/site";
import { visitorContact, visitorFacts } from "@/content/visitor";
import type { ContentProviderStatus, ContentRepository } from "./repository";

export const localContentRepository: ContentRepository = {
  async getProgrammes() {
    return programmes;
  },
  async getProgrammeBySlug(slug) {
    return programmes.find((programme) => programme.slug === slug);
  },
  async getFacilities() {
    return facilities;
  },
  async getHeritageMoments() {
    return heritageMoments;
  },
  async getHeritagePreviewMoments() {
    return heritagePreviewMoments;
  },
  async getEvents() {
    return events;
  },
  async getEventBySlug(slug) {
    return events.find((event) => event.slug === slug);
  },
  async getVisitorFacts() {
    return visitorFacts;
  },
  async getVisitorContact() {
    return visitorContact;
  },
  async getSearchRecords() {
    return searchRecords;
  },
};

export const localContentProviderStatus: ContentProviderStatus = {
  id: "local",
  label: "Reviewed repository content",
  external: false,
};
