import CafeList from "../components/cafeList/index";
import { ListLayout } from "../layouts/list/index";

export default function cafePage() {
  return (
    <>
      <ListLayout>
        <CafeList />
      </ListLayout>
    </>
  );
}
