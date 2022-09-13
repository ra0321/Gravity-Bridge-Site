#!/bin/bash

rm -rf ./assets/data/dict.json
curl -OL https://raw.githubusercontent.com/cosmos/advocates/master/glossary/dict.json
mv dict.json assets/data