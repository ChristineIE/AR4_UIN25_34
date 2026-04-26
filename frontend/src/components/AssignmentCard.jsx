import { useState, useEffect } from "react";
import client from "../helpers/client.js";

export default function AssignmentCard() {
  const [assignment, setAssignment] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssignments() {
      const query = await client.fetch("*[_type == 'assignments']{_id, title, content}")
      setAssignment(query);
    }

    fetchAssignments()
  }, [])

  console.log(assignment)

  return (
    <section>
      {assignments?.map((a) => (
        <article key={a._id}>
          <h2>{a.title}</h2>
          <p>{a.content}</p>
        </article>
      ))}
    </section>
  )
}
