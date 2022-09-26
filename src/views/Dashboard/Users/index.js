// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Users() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {/* <Authors
        title={"Authors Table"}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      /> */}
      <Projects
        title={""}
        captions={["Name", "Description", "Time", "Owner", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Users;
