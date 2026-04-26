import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";

export default function AssignmentCard() {
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssignments() {
      const query = await client.fetch(
        "*[_type == 'assignments']{title, content}",
      );
      setAssignment(query);
    }

    fetchAssignments();
  }, []);

  console.log(assignment);

  return <article>{assignment?.map()}</article>;
}
