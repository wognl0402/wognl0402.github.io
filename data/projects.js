// Add or edit projects here. They render in order.
window.PROJECTS = [
  {
    image: "images/retarget.gif",
    title: "Humanoid control with AMASS dataset (IsaacLab)",
    description: "Retargeting human motion to various humanoid platforms using the AMASS dataset. Validated in IsaacLab training for scalable humanoid locomotion and manipulation.",
  },
  {
    image: "images/xr_robot_data_collection.png",
    title: "XR-robot data collection (Unity)",
    description: "We use VR/XR devices to collect demonstration data in a virtual system. An immersive interface enables natural human-robot interaction through gesture-based control and hand tracking, mapping user motions to a robotic arm. We incorporate torque feedback from the physical robot and interact with the environment to collect a more safe dataset for skill learning.",
    links: [{ label: "Project Page", url: "xr_robot_data_collection.html" }],
  },
  {
    image: "images/2023_IITP.gif",
    title: "Sim2Real / Real2Real for robotic skill learning",
    subtitleHtml: "Project @ <a href=\"https://rirolab.kaist.ac.kr/\">RIRO Lab</a>, 2023",
    descriptionHtml: "In this project, we train robotic agents to acquire human-like skills through interactive learning. We utilize simulated environments in IsaacSim or employ teleoperation to guide and teach the robots, such as deformable object manipulation.",
  },
  {
    image: "images/2022_PINN.gif",
    title: "Physics-Informed Gradient Regularization for Inverse Reinforcement Learning",
    venue: "RSS Workshop on Experiment-oriented Locomotion and Manipulation Research, 2023",
    description: "In this project, I proposed a novel approach by integrating Physics-Informed Neural Networks (PINN) into an Inverse Reinforcement Learning (IRL) framework. This methodology utilized PINN to solve the Hamilton-Jacobi-Bellman differential equation, achieving two main objectives: (i) replication of the demonstrated behavior and (ii) recovery of the reward.",
  },
  // {
  //   image: "images/2018_ME400.gif",
  //   title: "Autonomous Ball-picking Vehicle",
  //   subtitle: "Capstone Design, 2018",
  //   description: "Undergraduate Capstone project at KAIST. We built an autonomous ball-collecting vehicle designed to pick up blue balls while avoiding red balls. In this project, I participated as a group leader and was responsible for programming and control tasks.",
  // },
  // {
  //   image: "images/2013_HPAC.gif",
  //   title: "Human Powered Aircraft",
  //   subtitle: "Human Powered Aircraft Competition, 2013",
  //   description: "Participated in the 2013 HPAC hosted by Korea Aerospace Research Institute (KARI). We built a human-powered aircraft that successfully flew approximately 20 meters. In this project, my responsibilities were specifically focused on designing and making the wings.",
  // },
];
