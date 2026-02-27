import { Controller, Get } from "@nestjs/common";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
};

@Controller("api")
export class AppController {
  @Get("jobs")
  getJobs(): Job[] {
    return [
      {
        id: 1,
        title: "Junior Software Engineer",
        company: "Visahire",
        location: "Remote (US)",
        salaryRange: "$70k – $90k",
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Startup XYZ",
        location: "Austin, TX",
        salaryRange: "$80k – $100k",
      },
      {
        id: 3,
        title: "Backend Developer (Node.js)",
        company: "Tech Corp",
        location: "Remote (Anywhere)",
        salaryRange: "$90k – $120k",
      },
    ];
  }
}