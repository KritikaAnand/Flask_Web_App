function deleteNote(noteId) {
  fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
      headers: {
          "Content-Type": "application/json"
      }
  }).then(() => {
      window.location.href = "/";
  }).catch(err => {
      console.error("Error deleting note:", err);
  });
}
