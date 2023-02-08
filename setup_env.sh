#!/bin/bash

echo API_URL: "$API_URL"
echo GOOGLE_CLIENT_ID: "$GOOGLE_CLIENT_ID"

echo API_URL="$API_URL" >> ./app/.env
echo GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" >> ./app/.env