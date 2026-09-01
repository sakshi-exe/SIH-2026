const mockResponses = {
  pmfby: {
    keywords: ["pmfby", "crop insurance", "fasal bima"],
    response:
      "Pradhan Mantri Fasal Bima Yojana (PMFBY) provides crop insurance support to farmers against specified crop losses and natural risks.",
    source: "Government Scheme Knowledge Base",
  },

  pacs: {
    keywords: ["pacs", "cooperative society", "cooperative"],
    response:
      "PACS stands for Primary Agricultural Credit Society. It provides various agricultural and cooperative services to its members.",
    source: "Verified Cooperative Knowledge Base",
  },

  grievance: {
    keywords: ["grievance", "complaint", "complain"],
    response:
      "You can register a grievance through Cooperative Sahayak. Your complaint will receive a reference ID that can be used for tracking.",
    source: "Cooperative Sahayak Grievance System",
  },

  default: {
    response:
      "I can help you with cooperative services, government schemes, agricultural support and grievance-related information.",
    source: "Cooperative Sahayak Knowledge Base",
  },
};

export default mockResponses;