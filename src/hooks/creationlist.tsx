import { fetchCreationList } from "@/services/creation";
import { useModule } from "@/store";
import CreationList from "@/store/creationlist";
import { TCreation } from "@/types/creation";
import { set } from "ol/transform";
import { useEffect } from "react";
export const useRefreshCreationList = () => {
  const {
    creationList: {
      loading,
      setList,
      setLoaded,
      setLoading,
    }
  } = useModule();
  const refreshCreationList = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await fetchCreationList(1);
    if (res) {
      setLoading(false);
    }

    if (res.data && res.code === 0) {
      setList(res.data as TCreation[]);
      setLoaded(true);
    }
  }

  return refreshCreationList;

};
export const useCreationList = () => {
  const {
    creationList
  } = useModule();

  const refreshCreationList = useRefreshCreationList();

  useEffect(() => {
    refreshCreationList();
  }, [refreshCreationList]);

  return {
    creationList: creationList.list,
    creationListLoaded: creationList.loaded,
    creationListLoading: creationList.loading,
  };
}