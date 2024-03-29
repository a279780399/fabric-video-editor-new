"use client";

import dynamic from "next/dynamic";

const DynmicEditor = dynamic(
  () => import("../../components/Editor").then((a) => a.EditorWithStore),
  {
    ssr: false,
  }
);
const videoUrls = [
  "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
  "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
  "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
  // Add more video URLs as needed
];

function EditorPage() {
  return (
    <>
      <DynmicEditor />
    </>
  );
}

EditorPage.diplsayName = "EditorPage";

export default EditorPage;
