export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  postedDate: string;
  jobType: string;
}

export const jobs: JobData[] = [
  {
    id: "1",
    title: "Head Chef",
    company: "The Grand Hotel",
    location: "San Francisco, CA",
    salary: "$75,000 - $90,000",
    description: "We're looking for an experienced Head Chef to lead our kitchen team. You'll be responsible for menu planning, food preparation, and kitchen management while maintaining high-quality standards.",
    postedDate: "2 days ago",
    jobType: "full-time"
  },
  {
    id: "2",
    title: "Sous Chef",
    company: "Bistro Gourmet",
    location: "Los Angeles, CA",
    salary: "$55,000 - $65,000",
    description: "Join our culinary team as a Sous Chef. You'll work closely with the Head Chef to prepare exceptional dishes, manage kitchen staff, and ensure smooth kitchen operations.",
    postedDate: "1 week ago",
    jobType: "full-time"
  },
  {
    id: "3",
    title: "Pastry Chef",
    company: "Sweet Delights Bakery",
    location: "Austin, TX",
    salary: "$45,000 - $55,000",
    description: "We're hiring a creative Pastry Chef to create delicious desserts, pastries, and baked goods for our high-end bakery. Experience with wedding cakes and specialty desserts is a plus.",
    postedDate: "3 days ago",
    jobType: "full-time"
  },
  {
    id: "4",
    title: "Line Cook",
    company: "Urban Kitchen",
    location: "New York, NY",
    salary: "$35,000 - $45,000",
    description: "Looking for an experienced Line Cook to join our fast-paced kitchen. You'll be preparing dishes according to our recipes and specifications while maintaining cleanliness and organization.",
    postedDate: "5 days ago",
    jobType: "part-time"
  },
  {
    id: "5",
    title: "Restaurant Manager",
    company: "Seaside Dining",
    location: "Miami, FL",
    salary: "$60,000 - $70,000",
    description: "Join our team as a Restaurant Manager to oversee daily operations, staff management, and customer satisfaction. You'll ensure high-quality food service and maintain excellent dining experiences.",
    postedDate: "1 day ago",
    jobType: "full-time"
  },
  {
    id: "6",
    title: "Bartender",
    company: "Craft Cocktail Lounge",
    location: "Chicago, IL",
    salary: "$40,000 - $50,000 + tips",
    description: "We're looking for a skilled Bartender with knowledge of classic and creative cocktails. You'll provide excellent service while creating a welcoming atmosphere for guests.",
    postedDate: "1 week ago",
    jobType: "full-time"
  }
];

export const getJobById = (id: string): JobData | undefined => {
  return jobs.find(job => job.id === id);
}; 