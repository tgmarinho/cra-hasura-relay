import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

import { MembersQuery } from "./__generated__/MembersQuery.graphql";

/**
 *  Relay Query - but it was returning duplicated item (2)
 *  members_connection {
    edges {
      node {
        id
        name
        email
      }
    }
  }
 * 
 * 
 */

function Members() {
  const { members } = useLazyLoadQuery<MembersQuery>(
    graphql`
      query MembersQuery {
        members {
          id
          email
          name
        }
      }
    `,
    {}
  );

  return (
    <div>
      {members.map(({ id, name, email }) => (
        <div key={id}>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Members;
