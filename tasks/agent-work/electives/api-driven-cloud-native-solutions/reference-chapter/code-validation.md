# Code validation

The FastAPI block is an educational, deterministic service. It was parsed with
Python 3.12's AST compiler to verify syntax. Reviewers must run it in an isolated
environment with pinned FastAPI/Pydantic versions and an ASGI test client before
changing `codeStatus` to `tested`.

Required checks: valid score is bounded; missing and extra fields are rejected;
non-finite values are rejected; unauthorized tenant receives 403; health routes
return their declared shape; OpenAPI generation succeeds; no request body is
written to default logs.
