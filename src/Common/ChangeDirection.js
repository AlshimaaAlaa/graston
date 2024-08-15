import { useTranslation } from 'react-i18next';

const useDirection = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'ar' ? 'rtl' : 'ltr';
};

export default useDirection;
