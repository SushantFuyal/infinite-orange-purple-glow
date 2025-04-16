
import { Linkedin, Twitter, Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-infinite-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-infinite-purple font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
        <div className="flex space-x-3 pt-2">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-infinite-purple hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-infinite-purple hover:text-white transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-infinite-purple hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "CEO & Strategy Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bio: "Over 15 years of experience in digital marketing, helping businesses achieve exceptional growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@infinite.com",
      },
    },
    {
      name: "Michael Chen",
      role: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bio: "Expert in search engine algorithms with a track record of improving client rankings and visibility.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@infinite.com",
      },
    },
    {
      name: "Olivia Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bio: "Award-winning designer who combines aesthetics with strategy to create compelling brand experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "olivia@infinite.com",
      },
    },
    {
      name: "Alex Thompson",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      bio: "Social media strategist who builds engaging communities and drives meaningful conversations.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@infinite.com",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-infinite-purple/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-infinite-orange/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Our diverse team of experts brings together creativity, technical expertise, and strategic thinking to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg border border-infinite-purple/30 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-gray-600 mb-4">
              Passionate about digital marketing? We're always looking for talented individuals to join our team.
            </p>
            <a
              href="#contact"
              className="inline-block px-5 py-2 rounded-full gradient-bg text-white font-medium hover:shadow-lg transition-all"
            >
              View Openings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
