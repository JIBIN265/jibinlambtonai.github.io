import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bannerImage from './employment-at-lambton.jpg';
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import ChatRounded1 from "@mui/icons-material/AddLinkTwoTone";
import ChatRounded2 from "@mui/icons-material/AddAPhotoSharp";


const HomePage = () => {
  return (
    <div className="card-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner Image" width="107%" height="100%" />
      </div>
      <Link to="/summary" className="card">
        <DescriptionRounded
          sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 0 }}
        />
        <h3>Text Summary</h3>
        <p>Summarize long text into short sentences</p>
      </Link>
      <Link to="/paragraph" className="card">
        <FormatAlignLeftOutlined
          sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 0 }}
        />
        <h3>Paragraph Generation</h3>
        <p>Generate Paragraph with words</p>
      </Link>
      <Link to="/chatbot" className="card">
        <ChatRounded
          sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 0 }}
        />

        <h3>Chatbot</h3>
        <p>Chat With AI Chatbot</p>
      </Link>
      <Link to="/js-converter" className="card">
        <ChatRounded1
          sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 0 }}
        />

        <h3>JS Converter</h3>
        <p>Translate english to javascript code</p>
      </Link>
      <Link to="/scifi-image" className="card">
        <ChatRounded2
          sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 0 }}
        />

        <h3>Scifi Image</h3>
        <p>Generate Scifi images</p>
      </Link>
    </div>
  );
};

export default HomePage;