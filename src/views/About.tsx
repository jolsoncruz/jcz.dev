const About = () => {
  return (
    <>
      <div className="bg-zinc-50">
        <div className="mx-auto max-w-6xl space-y-10 px-5 py-32">
          <h1 className="text-left text-2xl font-medium text-jelly-bean-400">
            About
          </h1>
          <p>
            Over the span of 7 years, I've been immersed in the world of coding,
            split between 5 years in Network Engineering and a dedicated 2-year
            dive into Software Development. My coding journey started when I
            pursued a dual-degree in Computer Science and Network Engineering at
            De La Salle University. Seeking to further my expertise, I ventured
            to Montreal, embarking on a post-graduate diploma program centered
            on Software Development.
          </p>
          <p>
            As a Software Developer, I have gained thorough training and
            experience on various programming languages - from procedural to
            object-oriented and functional. I also worked on diverse machine
            projects like creating socket-based chat rooms, university-wide
            forums, and implementing a user vs AI tic-tac-toe game. This journey
            expanded my proficiency not just in languages, but also in
            fundamental concepts like Data Structures and Algorithms. Recently,
            I had the chance to create a banking application through C# which
            allowed users to perform transactional operations based on user
            roles (i.e. client or banker).
          </p>
          <p>
            As a Network Engineer, I gained experience in contributing to the
            emergence of IoT, while at the same time, understanding their
            vulnerabilities. In the past year, my peers and I published a
            research on the implementation and modification of A Lightweight
            Authentication and Key Management Scheme for Wireless Sensor
            Networks (AKMS 2.0), which aimed to audit and improve existing
            authentication protocols among WSN devices.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
