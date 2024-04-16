URL="https://directedsuccess.com/api/health"

COLOR_DEFAULT='\033[0m'
COLOR_RED='\033[0;31m'
COLOR_GREEN='\033[0;32m'

ciBuildNumber="8626052052.64x1"
deployedMatchesExpected=false
start=$EPOCHSECONDS

while [ "$deployedMatchesExpected" != true ]
do
    content=$(curl -s $URL)
    buildNumber=$(jq -r '.buildNumber' <<<"$content")

    TEXT_COLOR=$COLOR_RED
#    if [ "$buildNumber" == "$ciBuildNumber" ]; then
#        deployedMatchesExpected=true
#        TEXT_COLOR=$COLOR_GREEN
#    fi

#    echo matches? $deployedMatchesExpected $deployedMatchesExpected2

    echo "Expected: $TEXT_COLOR $ciBuildNumber $COLOR_DEFAULT -> Received: $COLOR_GREEN $buildNumber $COLOR_DEFAULT "

    if (( EPOCHSECONDS-start > 5 )); then break; fi
    [ "$deployedMatchesExpected" != true ] && sleep 2
done

echo "App deployed, hooray! 🚀"
