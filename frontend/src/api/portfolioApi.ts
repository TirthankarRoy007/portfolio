import { experience, profile, projects, skills } from "../data/portfolioData";
import { ContactPayload, Experience, Profile, Project, Skill } from "../types/portfolio";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const portfolioApi = {
  async getProfile(): Promise<Profile> {
    return profile;
  },

  async getSkills(): Promise<Skill[]> {
    return skills;
  },

  async getExperience(): Promise<Experience[]> {
    return experience;
  },

  async getProjects(): Promise<Project[]> {
    return projects;
  },

  async sendContactMessage(payload: ContactPayload): Promise<{ message: string }> {
    if (!WEB3FORMS_ACCESS_KEY) {
      throw new Error("Missing Web3Forms access key.");
    }

    const formData = new FormData();

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("subject", `Portfolio contact: ${payload.subject}`);
    formData.append("message", payload.message);
    formData.append("from_name", "Tirthankar Roy Portfolio");
    formData.append("replyto", payload.email);
    formData.append("botcheck", "");

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      throw new Error(result.message ?? "Unable to send message right now.");
    }

    return {
      message: "Message sent successfully. I’ll get back to you soon."
    };
  }
};
