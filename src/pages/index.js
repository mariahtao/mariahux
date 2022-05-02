import * as React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey, I'm Mariah!" title="Mariah Tao">
      <div>
        <text className="gradient">
          UI ENGINEER + DESIGNER
        </text>
        <svg
          className="w-80 h-80 sm:w-full sm:h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 390 390"
        >
          <path
            className="dev-motion"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.857 118.612a8.954 8.954 0 1 0 0-17.908 8.954 8.954 0 0 0 0 17.908Zm0-1.99a6.964 6.964 0 1 0 0-13.928 6.964 6.964 0 0 0 0 13.928ZM66.658 109.658a8.954 8.954 0 1 1-17.908 0 8.954 8.954 0 0 1 17.908 0Zm-1.99 0a6.964 6.964 0 1 1-13.928 0 6.964 6.964 0 0 1 13.928 0ZM87.551 118.612a8.954 8.954 0 1 0 0-17.908 8.954 8.954 0 0 0 0 17.908Zm0-1.99a6.964 6.964 0 1 0 0-13.928 6.964 6.964 0 0 0 0 13.928Z"
            fill="#fff"
          />
          <path
            className="dev-motion"
            d="M18.27 189.281c0-.549.445-.995.995-.995h80.909a.996.996 0 0 1 0 1.99h-80.91a.995.995 0 0 1-.994-.995ZM121.052 227.435a.996.996 0 0 0 0 1.99h60.029a.994.994 0 0 0 0-1.99h-60.029ZM109.619 189.281c0-.549.445-.995.994-.995h44.369a.995.995 0 0 1 0 1.99h-44.369a.994.994 0 0 1-.994-.995ZM36.663 207.426a.995.995 0 1 0 0 1.99h56.55a.995.995 0 0 0 0-1.99h-56.55ZM102.657 208.421c0-.55.446-.995.995-.995h83.518a.995.995 0 0 1 0 1.99h-83.518a.996.996 0 0 1-.995-.995ZM36.663 266.584a.995.995 0 0 0 0 1.99h99.178a.994.994 0 1 0 0-1.99H36.663ZM18.27 286.719c0-.55.445-.995.995-.995h97.437a.995.995 0 0 1 0 1.99H19.264a.995.995 0 0 1-.994-.995ZM54.063 227.435a.995.995 0 0 0 0 1.99h56.55a.995.995 0 0 0 0-1.99h-56.55ZM190.525 228.43c0-.549.445-.995.995-.995h97.437a.995.995 0 0 1 0 1.99H191.52a.994.994 0 0 1-.995-.995ZM135.841 247.445a.994.994 0 0 0 0 1.99h87.868a.995.995 0 0 0 0-1.99h-87.868ZM53.068 248.44c0-.55.445-.995.995-.995h71.339a.994.994 0 1 1 0 1.99h-71.34a.995.995 0 0 1-.994-.995ZM234.149 247.445a.994.994 0 1 0 0 1.99h26.099a.995.995 0 0 0 0-1.99h-26.099ZM29.542 150.954a.994.994 0 0 1-.028 1.406l-8.813 8.46 8.813 8.461a.994.994 0 1 1-1.378 1.435l-8.813-8.46a1.99 1.99 0 0 1 0-2.871l8.813-8.46a.994.994 0 0 1 1.406.029ZM49.32 152.552a.995.995 0 0 1 1.379-1.436l8.812 8.46a1.99 1.99 0 0 1 0 2.871l-8.813 8.46a.995.995 0 1 1-1.377-1.435l8.812-8.46-8.813-8.46ZM43.33 147.438a.994.994 0 0 1 .674 1.235l-7.266 24.666a.995.995 0 0 1-1.908-.563l7.265-24.665a.995.995 0 0 1 1.236-.673ZM29.514 305.476a.994.994 0 1 0-1.378-1.435l-8.813 8.46a1.99 1.99 0 0 0 0 2.871l8.813 8.46a.994.994 0 1 0 1.378-1.435l-8.813-8.461 8.813-8.46ZM49.292 304.261a.995.995 0 0 0 .029 1.407l8.812 8.46-8.813 8.46a.995.995 0 0 0 1.379 1.435l8.812-8.46a1.99 1.99 0 0 0 0-2.871l-8.813-8.46a.996.996 0 0 0-1.406.029ZM44.004 301.789a.994.994 0 1 0-1.909-.562l-7.265 24.665a.995.995 0 1 0 1.908.563l7.266-24.666Z"
            fill="#fff"
          />
          <path
            className="dev-motion"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M331.711 296.413h41.376c9.341 0 16.913-7.572 16.913-16.913V59.913C390 50.573 382.428 43 373.087 43H75.202c-9.341 0-16.913 7.572-16.913 16.913V86.5H16.913C7.573 86.499 0 94.07 0 103.412v226.547c0 9.341 7.572 16.913 16.913 16.913h297.885c9.341 0 16.913-7.572 16.913-16.913v-33.546Zm56.299-236.5c0-8.242-6.681-14.923-14.923-14.923H75.202c-8.242 0-14.924 6.681-14.924 14.923V86.5h254.52c9.341 0 16.913 7.572 16.913 16.913v191.012h41.376c8.242 0 14.923-6.682 14.923-14.924V59.913ZM1.99 103.412c0-8.242 6.681-14.923 14.923-14.923h297.885c8.242 0 14.924 6.681 14.924 14.923v27.791a.993.993 0 0 0-.745-.335H3.17a.995.995 0 1 0 0 1.99h325.807c.296 0 .562-.13.745-.336v197.437c0 8.242-6.682 14.923-14.924 14.923H16.913c-8.242 0-14.923-6.681-14.923-14.923V103.412Z"
            fill="#fff"
          />
        </svg>
        <p>
          I have <text>5 + years</text> of experience in <text>product development</text> and <text>design systems</text>. In my work, you will find that research and creativity are a
          vital part of my problem solving process!
        </p>
        <p> Here is my selected work. </p>
        <div className="mt-16 space-y-10">
          <Card
            h2="Roos Design System"
            badge1="UX lead"
            badge2="PM"
            badge3="Front-end"
            tag1="ML/AI"
            tag2="Saas Enterprise"
            tag3="Edtech"
            href="/rds"
          ></Card>
          <Card
            h2="Exam admin experience"
            badge1="UX lead"
            badge2="User researcher"
            badge3="PM"
            tag1="ML/AI"
            tag2="Saas Enterprise"
            tag3="Edtech"
            href="/exam-admin-exp"
          ></Card>
          <Card
            h2="Test taker experience"
            badge1="UX lead"
            badge2="User researcher"
            badge3="PM"
            tag1="ML/AI"
            tag2="Saas Enterprise"
            tag3="Edtech"
            href="/test-taker-exp"
          ></Card>
          <Card
            h2="Uptime UI"
            badge1="UX lead"
            badge2="PM"
            badge3="Mentor"
            tag1="ML/AI"
            tag2="Saas Enterprise"
            tag3="Edtech"
            href="/uptime-ui"
          ></Card>
          <Card
            h2="iOS app"
            badge1="UX lead"
            badge2="Q/A engineer"
            badge3="PM"
            tag1="ML/AI"
            tag2="Saas Enterprise"
            tag3="Edtech"
            href="/ios-app"
          ></Card>
          <Card
            h2="CORE + VICE"
            badge1="Product designer"
            badge2="User researcher"
            badge3="Tech writer"
            tag1="Fintech"
            tag2="Insurance"
            tag3="SaaS Enterprise"
            href="/core-vice"
          ></Card>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
