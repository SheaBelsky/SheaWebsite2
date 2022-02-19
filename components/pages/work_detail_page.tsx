import { Box, Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Fragment } from "react";
import type { WorkShape } from "../../lib/work_data";

const WorkDetailPage = (props: WorkShape) => (
  <Fragment>
    <Heading as="h1">{props.company}</Heading>
    <Heading as="h2" fontWeight="medium" size="md">
      {props.title}
    </Heading>
    <Heading as="h3" fontWeight="light" size="sm">
      {props.dates}
    </Heading>
    <Box alignSelf="flex-start" marginTop="20px">
      {props.description}

      {props.readingLinks.length > 0 && (
        <Fragment>
          <Heading as="h2" fontWeight="medium" marginTop="20px" size="md">
            Reading
          </Heading>
          <UnorderedList>
            {props.readingLinks.map((reading) => (
              <ListItem key={reading.href}>
                <Link href={reading.href} isExternal>
                  {reading.title}
                </Link>{" "}
                - {reading.description}
              </ListItem>
            ))}
          </UnorderedList>
        </Fragment>
      )}
    </Box>
  </Fragment>
);

export default WorkDetailPage;
