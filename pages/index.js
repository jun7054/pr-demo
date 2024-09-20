import { Container, Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material"
import Link from "next/link";
import Button from "@mui/material/Button";

function createData(name, github, link){
  return {name, github, link};
}
const rows = [
  createData('duduge', ' https://github.com/jun7054/javascript_Lecture/tree/main/%EB%91%90%EB%8D%94%EC%A7%80%EC%9E%A1%EA%B8%B0'),
  createData('memory', 'https://github.com/jun7054/javascript_Lecture/tree/main/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%20%EC%9D%B8%EB%B2%A0%EC%9D%B4%EB%8D%94'),
  createData('snake', 'https://github.com/jun7054/javascript_Lecture/tree/main/%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC%20%EA%B2%8C%EC%9E%84'),
]

export default function Home() {
  return (
    <>
      <Container fixed>
         <h1>하이요</h1>
         <Table sx={{minWidth : 650}} aria-label="demo-list">
          <TableHead>
            <TableRow>
              <TableCell>Demo-List</TableCell>
              <TableCell>Github</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th' : {border:0}}}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
                <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>

              </TableRow>
            ))}
          </TableBody>
         </Table>
      </Container>
    </>
  )
}
