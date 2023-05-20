import http from "k6/http";
import { check, fail, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const { API_URL = "http://localhost:4000/graphql", TIMEOUT = 5 } = __ENV;

const CreateSatoriCall = () => {
  const CreateSatoriMutation = `mutation createSatori($input: CreateSatoriInput!) {
    createSatori(input: $input) {
      id
    }
  }`;

  let CreateSatoriResp = http.post(
    API_URL,
    JSON.stringify({
      query: CreateSatoriMutation,
      variables: {
        input: {
          name: "test",
          type: "Hard",
          defaultScoreTemplate: "TenStars",
          description: "test",
        },
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let CreateSatoriCheck = check(
    CreateSatoriResp,
    {
      "CreateSatori response code was 200": (result) => result.status === 200 && result.json().data,
    },
    { myTag: "CreateSatori check" }
  );

  if (!CreateSatoriCheck) {
    fail(`CreateSatori expected response ${JSON.stringify(CreateSatoriResp)}`);
  }
};


export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    checks: ["rate>=1"], // All checks should be passed
  },
};

export default function () {
  CreateSatoriCall();
  sleep(Math.random() * TIMEOUT);
}

export function handleSummary(body) {
  return {
    "summary.html": htmlReport(body),
  };
}
