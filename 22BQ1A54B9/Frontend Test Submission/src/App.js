import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Log } from '../../LoggingMiddleware/loggingMiddleware';

function App() {
  const [url, setUrl] = useState('');
  const handleSubmit = async () => {
    await Log("frontend", "info", "UI", `User submitted URL: ${url}`, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrZXRoYW5hcGF0dGVwYXJhcHVAZ21haWwuY29tIiwiZXhwIjoxNzU0MDI4OTgyLCJpYXQiOjE3NTQwMjgwODIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiZjhlMjlhNy0zY2I4LTRmNGYtYmMyZi1hYTkzZjk1YjBlODEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwYXR0ZXBhcmFwdSBrZXRoYW5hIGxha3NobWkiLCJzdWIiOiI2MTUwMDFkMS0xZDZmLTRkY2EtYWI3MS1mMTQ0YmM3YjZmN2EifSwiZW1haWwiOiJrZXRoYW5hcGF0dGVwYXJhcHVAZ21haWwuY29tIiwibmFtZSI6InBhdHRlcGFyYXB1IGtldGhhbmEgbGFrc2htaSIsInJvbGxObyI6IjIyYnExYTU0YjkiLCJhY2Nlc3NDb2RlIjoiUG5WQkZWIiwiY2xpZW50SUQiOiI2MTUwMDFkMS0xZDZmLTRkY2EtYWI3MS1mMTQ0YmM3YjZmN2EiLCJjbGllbnRTZWNyZXQiOiJLR3VwVllCa1NmUVJTc0hXIn0.C1IXKXPRSgg8HAqIoBdZ2a4Bt0ozUxEzIMqFSYSiroo");
    alert('URL submitted');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <TextField label="Enter URL" fullWidth margin="normal" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Container>
  );
}

export default App;
