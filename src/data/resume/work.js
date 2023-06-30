/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Sotoon Cloud Providers',
    position: 'Database as a Service Team',
    url: 'https://sotoon.ir',
    startDate: '2022-04-01',
    highlights: [
      'Participated in implementing a Kubernetes controller using Kubebuilder to manage 300 HA PostgreSQL database clusters.',
      'Successfully deployed the project as a Software-as-a-Service in AWS Marketplace, utilizing AWS tools such as EKS, EC2, CloudWatch, IAM, Cognito, and S3. Maintaining an uptime of 99%.',
      'Developed the backend for the panel of Database-as-a-Service project using Django REST framework.',
    ],
  },
  {
    name: 'Sotoon Cloud Providers',
    position: 'Backbone Team',
    url: 'http://sotoon.ir',
    startDate: '2021-09-01',
    endDate: '2022-04-01',
    highlights: [
      'Maintained a Traefik gateway for 20 gRPC services and a Kubernetes cluster for AI services, providing reliable and scalable infrastructure for client-facing applications.',
      'Engineered a logging and billing system for 10+ services using Kafka, Spark, HDFS and Apache Druid; increased billing accuracy to 95% in 6 months.',
      'Played a key role in maintaining code quality by reviewing and providing feedback on over 100 Git merge requests.',
    ],
  },
  {
    name: 'Sotoon Cloud Providers',
    position: 'AI-Image Team',
    url: 'http://sotoon.ir',
    startDate: '2020-12-01',
    endDate: '2021-09-01',
    highlights: [
      'Designed and implemented a gRPC server for multiple AI image models,using Python and related technologies Handling 100 requests per second.',
      'Managed the deployment of services on over 20 GPU and CPU servers, utilizing DevOps tools such as Prometheus, GitLab CI/CD, Grafana, Docker, and Ansible to ensure smooth deployment and good observability.',
      'Mentored a junior developer, guiding them in learning many backend engineering techniques, and contributing to the growth of the team.',
    ],
  },
  {
    name: 'Sotoon Cloud Providers',
    position: 'AI-Voice Team',
    url: 'http://sotoon.ir',
    startDate: '2019-06-01',
    endDate: '2020-12-01',
    highlights: [
      'Collaborated with data scientists to develop and deploy text-to-speech and speech-to-text services on gRPC using Python, ensuring high-performance and reliable service for a user base of over 1 million.',
      'Worked on the text-to-speech service, utilizing Python and related technologies such as PyTorch and TensorFlow to optimize the performance of the models by 100%',
      'Developed robust integration tests and benchmark tools for services using Python and Bash, creating 50+ tests with a test coverage of 90%.',
    ],
  },
];

export default work;
