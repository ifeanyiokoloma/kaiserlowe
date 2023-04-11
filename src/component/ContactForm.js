import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { FaRegHandshake } from "react-icons/fa";

const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Paper
      sx={{
        p: { xs: "3rem 2rem", sm: "4rem" },
        bgcolor: "rgba(255, 255, 255, .95)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        mb="1rem"
        component="h2"
        variant="h4"
      >
        <FaRegHandshake color="var(--secondary)" />
        Get in Touch
      </Typography>
      <StyledForm component="form" ref={form} onSubmit={sendEmail}>
        <TextField
          label="Name"
          type="text"
          name="user_name"
          variant="filled"
          required
          color="secondary"
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          name="user_email"
          variant="filled"
          required
          color="secondary"
          fullWidth
        />

        <TextField
          required
          label="Message"
          multiline
          rows={4}
          name="message"
          variant="filled"
          color="secondary"
          fullWidth
        />

        <Button type="submit" variant="contained" endIcon={<Send />}>
          Just Send
        </Button>
      </StyledForm>
    </Paper>
  );
};

export default ContactForm;
